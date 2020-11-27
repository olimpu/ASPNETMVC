using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;
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

        static string GetConfiguration(string section, string key)
        {
            try
            {
                IConfigurationBuilder builder = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

                IConfigurationRoot configuration = builder.Build();                
                IConfigurationSection configurationSection = configuration.GetSection(section).GetSection(key);

                return configurationSection.Value;
            }
            catch (Exception e)
            {
                return "";
            }
        }

        public static string GetDatabase()
        {
            return GetConfiguration("Conexao", "Banco");
        }
    }
}
