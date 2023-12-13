using lum.view.model.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace lum.service.interfaces
{
    public interface IMaterialRepository
    {
        Task<(List<MaterialViewModel>, HttpStatusCode, string)> GetAllMaterials(int pageSzie, int PageNumber);

        Task<(MaterialViewModel, HttpStatusCode, string)> GerMaterialById(string Id);

        Task<(MaterialViewModel, HttpStatusCode, string)> SaveMaterial(MaterialViewModel contactPersonRm);

    }
}
