#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

use serde::Serialize;
use tauri::execute_promise;

mod cmd;

#[derive(Serialize)]
struct Reply {
  data: String,
}


fn main() {
  tauri::AppBuilder::new()
    .splashscreen_html("<div>The app is loading...</div>")
    .setup(|webview, _source| {
      let mut webview = webview.as_mut();
      tauri::event::listen(String::from("js-event"), move |msg| {
        println!("got js-event with message '{:?}'", msg);
        let reply = Reply {
          data: "something else".to_string(),
        };
        tauri::event::emit(
          &mut webview,
          String::from("rust-event"),
          Some(serde_json::to_string(&reply).unwrap()),
        ).expect("failed to emit");
      });
    })
    .invoke_handler(|_webview, arg| {
      use cmd::Cmd::*;
      match serde_json::from_str(arg) {
        Err(e) => Err(e.to_string()),
        Ok(command) => {
          match command {
            // definitions for your custom commands from Cmd here
            SynchronousMessage { event, payload } => {
              //  your command code
              println!("{} {:?}", event, payload);
            },
            AsynchronousMessage { endpoint, body, callback, error } =>
              execute_promise(
                _webview, move || {
                  println!("{} {:?}", endpoint, body);
                  Ok("{ key: 'async response', value: [{ id: 3 }] }".to_string())
                },
                callback,
                error,
              )
          }
          Ok(())
        }
      }
    })
    .build()
    .run();
}
