using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RectangleApplication
{
    class Rectangle
    {
        private double length;
        private double width;

        public void Acceptddetails()
        {
            Console.WriteLine("请输入长度：");
            length = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("请输入宽度：");
            width = Convert.ToDouble(Console.ReadLine());
        }
        public double GetArea()
        {
            return length * width;
        }
        public void Display()
        {
            Console.WriteLine("长度：{0}", length);
            Console.WriteLine("宽度：{0}", width);
            Console.WriteLine("面积：{0}", GetArea());
        }
    }
    class ExecuteRectange
    {
        static void Main(string[] args)
        {
            Rectangle r = new Rectangle();
            r.Acceptddetails();
            r.Display();
            Console.ReadLine();
        }
    }
}
