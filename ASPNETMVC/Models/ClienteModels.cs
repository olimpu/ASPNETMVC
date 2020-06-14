using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Authentication;
using System.Threading.Tasks;

namespace ASPNETMVC.Models
{
    public class ClienteModels
    {
        public int id { get; set; }
        public string hash { get; set; }
        public string nome { get; set; }
        public string email { get; set; }
        public DateTime dataNascimento { get; set; }
        public string telefonePrincipal { get; set; }
        public string telefoneSecundario { get; set; }
        public string observacoes { get; set; }
        public string documento { get; set; }
        public string razaoSocial { get; set; }
        public bool ieIsento { get; set; }
        public string ieNumero { get; set; }
        public bool imIsento { get; set; }
        public string imNumero { get; set; }
        public string cep { get; set; }
        public string endereco { get; set; }
        public string numero { get; set; }
        public string complemento { get; set; }
        public string bairro { get; set; }
        public CidadeModels Cidade { get; set; }

        public ClienteModels()
        {
            this.Cidade = new CidadeModels();
        }
    }
}
