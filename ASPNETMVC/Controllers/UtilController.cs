using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Cryptography;
using System.Text;

namespace ASPNETMVC.Controllers
{
    public class UtilController : Controller
    {
        public static String GetHash(String input)
        {
            MD5 md5Hash = MD5.Create();            
            
            byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes("OLIMPINHO" + input + "ENZAMEPASSANOTCC<3"));
            
            StringBuilder sBuilder = new StringBuilder();
            
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }
            
            return sBuilder.ToString();
        }
    }
}
