using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorApplication
{
    class NumberManipulator
    {
        public double num1;
        public double num2;

        public void AcceptNum()
        {
            Console.WriteLine("请输入第一个数:");
            num1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("请输入第二个数:");
            num2 = Convert.ToDouble(Console.ReadLine());
        }
        public double FindMax()
        {
            double result;
            if (num1 > num2)
                result = num1;
            else
                result = num2;
            return result;
        }
    }
    class Test
    {
        static void Main(string[] args)
        {
            double ret;
            NumberManipulator n = new NumberManipulator();
            n.AcceptNum();
            ret = n.FindMax();
            Console.WriteLine("最大值是:{0}", ret);
            Console.ReadLine();
        }
    }
}
