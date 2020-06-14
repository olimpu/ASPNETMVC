using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPNETMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ASPNETMVC.Controllers
{
    public class CidadeController : Controller
    {
        public JObject ListarCidadeParaCombo(String q)  //METODO LINDO DEMOREI HORAS PRA FAZER <3
        {
            JArray jA = new JArray();
            string jCidade = System.IO.File.ReadAllText(@"wwwroot/lib/cidades.json");

            JArray cidades = JArray.Parse(jCidade);

            foreach (var c in cidades.Where(x => x["Nome"].ToString().ToUpper().Contains(q.ToUpper())).OrderBy(x => x["Nome"]))
            {
                JObject jO = new JObject();
                jO.Add("id", c["ID"].ToString());
                jO.Add("text", c["Nome"].ToString());
                jA.Add(jO);
            }

            JObject jD = new JObject();
            jD.Add("data", jA);

            return jD;
        }
    }
}