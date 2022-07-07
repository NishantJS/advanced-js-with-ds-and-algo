// import { } from "http";
// import { Http2ServerRequest } from "http2";

import { createServer } from "http";

createServer((_req, res) => {
  res.write("hello");
  res.end();
}).listen(3000);
