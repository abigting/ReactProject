using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using tranferAPI.Models.Req;
using transfer.business;

namespace tranferAPI.Controllers
{

    [RoutePrefix("tranfer")]
    public class TranferController : ApiController
    {
        private ParaBusiness paraBusiness = new ParaBusiness();
        [Route("initialize"), HttpGet]
        public IHttpActionResult Initialize()
        {
            return Ok(paraBusiness.Init());
        }
        [Route("move"), HttpPost]
        public IHttpActionResult Move([FromBody]TranferReq.MoveItem req)
        {
            return Ok(paraBusiness.Move(req.direction, req.item));
        }
        [Route("result"), HttpPost]
        public IHttpActionResult Result([FromBody]TranferReq.Result req)
        {
            if (req != null)
            {
                return Ok(paraBusiness.Result(req.rightList));
            }
            else
            {
                return Ok("");
            }
        }
        //EVENT
         [Route("list"), HttpGet]
        public IHttpActionResult list()
        {
            TransferRepository TransferRepository = new TransferRepository();
            List<eventList> list = TransferRepository.GetList();
            return Ok(list);
        }
    }
}
