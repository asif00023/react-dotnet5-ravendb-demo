using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace lum.app.core
{
    public class LumResponse
    {
        public ResponseBody responseBody { get; set; }
    }

    public class ResponseBody
    {
        public HttpStatusCode StatusCode { get; set; }
        public string StatusMessage { get; set; }
        public dynamic objectVal { get; set; }
    }
}
