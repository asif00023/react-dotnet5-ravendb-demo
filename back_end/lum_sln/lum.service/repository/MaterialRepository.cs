using AutoMapper;
using lum.db.model;
using lum.service.interfaces;
using lum.view.model.ViewModel;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace lum.service.repository
{
    public class MaterialRepository:IMaterialRepository
    {
        //private readonly RavenDbContext _context;
        private readonly IMapper _mapper;
        private readonly IRavenDbRepository<Material> _ravRepository;

        private bool disposed = false;

        //public MaterialRepository()
        //{
        //    _context = new RavenDbContext();
        //}

        public MaterialRepository(IMapper mapper,IRavenDbRepository<Material> ravRepository)
        {
            
            _mapper = mapper;
            _ravRepository = ravRepository;

        }

        public async Task<(MaterialViewModel, HttpStatusCode, string)> GerMaterialById(string Id)
        {
            HttpStatusCode statusCode;
            try
            {
                var product = _ravRepository.Select(Id);

                var productModel = _mapper.Map<MaterialViewModel>(product);
                
                statusCode = HttpStatusCode.OK;

                return (productModel, statusCode, "Data Retrived");

            }
            catch (DbException r)
            {
                statusCode = HttpStatusCode.InternalServerError;
                //Log.Error(r.Message);
                //throw r;
                return (null, statusCode, r.Message);
            }

        }

        public async Task<(List<MaterialViewModel>,HttpStatusCode,string)> GetAllMaterials(int pageSize,int pageNumber)
        {
            HttpStatusCode statusCode;
            try
            {
                var materialsDbTbl = _ravRepository.SelectAll(pageSize, pageNumber);
                List<MaterialViewModel> materialViewModels = new List<MaterialViewModel>();
                MaterialViewModel materialViewModel;
                
                statusCode = HttpStatusCode.OK;
                foreach(Material mv in materialsDbTbl)
                {
                    materialViewModel=new MaterialViewModel();
                    //if (mv.Id.Contains("/"))
                    //    materialViewModel.Id = mv.Id.Split("/")[1].ToString();
                    //else
                        materialViewModel.Id = mv.Id.ToString();
                    materialViewModel.Name = mv.Name;
                    materialViewModel.TypeOfPhase= mv.TypeOfPhase;
                    materialViewModel.MinTemperature= mv.MinTemperature;
                    materialViewModel.MaxTemperature= mv.MaxTemperature;
                    materialViewModel.IsVisible= mv.IsVisible;
                    materialViewModels.Add(materialViewModel);
                }

                return (materialViewModels, statusCode,"Data Retrived");
                
            }
            catch (DbException r)
            {
                statusCode = HttpStatusCode.InternalServerError;
                //Log.Error(r.Message);
                //throw r;
                return (null, statusCode, r.Message);
            }

            
        }

        public async Task<(MaterialViewModel, HttpStatusCode, string)> PutMaterials(string id, MaterialViewModel materialViewModel)
        {
            HttpStatusCode statusCode;
            try
            {
                if(id!=materialViewModel.Id)
                    return (materialViewModel, HttpStatusCode.Conflict, "Data Error");
                var material = _mapper.Map<Material>(materialViewModel);
                _ravRepository.Update(material);

                statusCode = HttpStatusCode.OK;

                materialViewModel = _mapper.Map<MaterialViewModel>(material);

                return (materialViewModel, statusCode, "Data Retrived");

            }
            catch (DbException r)
            {
                statusCode = HttpStatusCode.InternalServerError;
                //Log.Error(r.Message);
                //throw r;
                return (null, statusCode, r.Message);
            }
        }

        public async Task<(MaterialViewModel, HttpStatusCode, string)> SaveMaterial(MaterialViewModel materialViewModel)
        {
            HttpStatusCode statusCode;

            Material material = _mapper.Map<Material>(materialViewModel);
            
            try
            {
                _ravRepository.Create(material);
                statusCode = HttpStatusCode.Created;
            }
            catch (DbException r)
            {
                statusCode = HttpStatusCode.InternalServerError;
                //Log.Error(r.Message);
                //throw r;
                return (materialViewModel, statusCode, r.Message);
            }
            
            return (materialViewModel, statusCode, "Data Saved Success");
        }
    }
}
