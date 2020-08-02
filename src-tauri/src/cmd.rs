use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct RequestBody {
  id: i32,
  name: String,
}

#[derive(Debug, Deserialize)]
pub struct SynchronousMessagePayload {
  state: String,
  data: u64,
}

// The commands definitions
// Deserialized from JS
#[derive(Deserialize)]
#[serde(tag = "cmd", rename_all = "camelCase")]
pub enum Cmd {
  SynchronousMessage {
    event: String,
    payload: SynchronousMessagePayload,
  },

  AsynchronousMessage { endpoint: String, body: RequestBody, callback: String, error: String },
}
