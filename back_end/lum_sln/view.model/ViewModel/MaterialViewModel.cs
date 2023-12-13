using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lum.view.model.ViewModel
{
    public class MaterialViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public bool IsVisible { get; set; }
        public string TypeOfPhase { get; set; }
        public int MinTemperature { get; set; }
        public int MaxTemperature { get; set; }
    }
}
