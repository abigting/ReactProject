using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace tranferAPI.Models.Req
{
	public class TranferReq
	{
        //Todo change MoveID to MoveItem
		public class MoveItem
		{
            //Todo change type to direction
			public int direction { get; set; }
            //Todo change status to item
			public string item { get; set; }
		}

        public class Result
        {
            public List<string> rightList { get; set; }
        }

    }
}