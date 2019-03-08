using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using tranfer.Entity;
using tranfer.Repository;

namespace transfer.business
{
    public class ParaBusiness
    {
        private TranferRepository tranferRepository;
        DbConnection dbConnection;

        public ParaBusiness()
        {
            tranferRepository = new TranferRepository();
        }

        public List<ParaLeft> Init()
        {
            TranferRepository tranferRepository = new TranferRepository();
            List<ParaLeft> initList = new List<ParaLeft>();
            if (tranferRepository.Init())
            {
                initList = tranferRepository.GetLeftList();
            }
            return initList;
        }

        public bool Move(int direction, string item)
        {
            if (string.IsNullOrWhiteSpace(item))
            {
                return false;
            }
            else
            {
                return tranferRepository.Move(direction, item);
            }
        }

        public string Result(List<string> rightList)
        {
            List<Para> list = tranferRepository.GetParaList();
            List<string> returnList = new List<string>();
            rightList.ForEach(s => returnList.AddRange(list.Where(x => x.ParaID == s).Select(x => x.ParaText)));
            return string.Join(Environment.NewLine, returnList);
        }

        //EVENT
        public List<eventList> GetList()
        {
            string strQuery = "SELECT * FROM event;";
            return dbConnection.Query<eventList>(strQuery).ToList();
        }

    }
}
