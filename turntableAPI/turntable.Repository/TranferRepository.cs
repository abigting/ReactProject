using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using MySql.Data.MySqlClient;
using tranfer.Core;
using tranfer.Entity;

namespace tranfer.Repository
{
    public class TranferRepository
    {
        DbConnection dbConnection;
        public TranferRepository()
        {
            dbConnection = new MySqlConnection(AppConfiguration.strConnSql);
        }

        public bool Init()
        {
            var para = new DynamicParameters();
            para.Add("@err", 0, DbType.Int32, ParameterDirection.Output);
            dbConnection.Query("procInitialize", para, null, true, null, CommandType.StoredProcedure);
            return para.Get<int>("@err") == 0;
        }
        public List<Para> GetParaList()
        {
            string strQuery = "SELECT * FROM para, paraRight WHERE para.ParaID = paraRight.ParaID;";
            return dbConnection.Query<Para>(strQuery).ToList();
        }
        public List<ParaLeft> GetLeftList()
        {
            string strQuery = "SELECT * FROM paraLeft";
            return dbConnection.Query<ParaLeft>(strQuery).ToList();
        }
        public bool Move(int direction, string item)
        {
            var para = new DynamicParameters();
            para.Add("@item", item);
            para.Add("@direction", direction);
            para.Add("@err", 0, DbType.Int32, ParameterDirection.Output);
            dbConnection.Query("procMove", para, null, true, null, CommandType.StoredProcedure);
            return para.Get<int>("@err") == 0;
        }
    }
}
