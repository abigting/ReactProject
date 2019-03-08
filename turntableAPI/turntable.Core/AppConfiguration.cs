using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tranfer.Core
{
    public static class AppConfiguration
    {
        public static string strConnSql
        {
            get { return ConfigurationManager.ConnectionStrings["strConnSql"].ConnectionString; }
        }
    }
}
