using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lum.db.model
{
    public class Material
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public bool IsVisible { get; set; }
        public string TypeOfPhase { get; set; }
        public int MinTemperature { get; set; }
        public int MaxTemperature { get; set; }
    }
}
