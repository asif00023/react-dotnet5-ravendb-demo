using AutoMapper;
using lum.app.core;
using lum.db.model;
using lum.service.interfaces;
using lum.service.repository;
using lum.view.model.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Net;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;

namespace lum.web.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaterialController : ControllerBase
    {
        
        private readonly IMapper _mapper;
        private readonly MaterialRepository _repository;
        private readonly IRavenDbRepository<Material> _ravRepository;
        private readonly ILogger<MaterialController> _logger;
        LumResponse matelsoResponse;
        ResponseBody matelsoResponseBody;
        

        public MaterialController(IMapper mapper, ILogger<MaterialController> logger, IRavenDbRepository<Material> ravRepository)
        {
            _ravRepository = ravRepository;
            
            _mapper = mapper;
            _logger = logger;
            _repository = new MaterialRepository(_mapper,_ravRepository);
            matelsoResponse = new LumResponse();
            matelsoResponseBody = new ResponseBody();
        }

        [HttpGet]
        public async Task<LumResponse> GetMaterials(int pagesize=1000,int pageNumber=1)
        {
            _logger.LogInformation("GetMaterials called");
            List<MaterialViewModel> conatctPersons;
            (conatctPersons,matelsoResponseBody.StatusCode,matelsoResponseBody.StatusMessage)= await _repository.GetAllMaterials(pagesize,pageNumber);

            matelsoResponseBody.StatusCode = HttpStatusCode.OK;
            if (conatctPersons == null)
            {
                matelsoResponseBody.StatusMessage = "No data found";
                matelsoResponse.responseBody = matelsoResponseBody;
                return matelsoResponse;
            }

            matelsoResponseBody.StatusMessage = "Object Retrive Successfully";
            matelsoResponseBody.objectVal = conatctPersons;
            matelsoResponse.responseBody = matelsoResponseBody;
            return matelsoResponse;
        }

        [HttpGet("{id}")]
        public async Task<LumResponse> GetMaterialsById(string id)
        {
            MaterialViewModel conatctPersons;
            //id = "materials/"+id;
            (conatctPersons, matelsoResponseBody.StatusCode, matelsoResponseBody.StatusMessage) = await _repository.GerMaterialById(id);

            matelsoResponseBody.StatusCode = HttpStatusCode.OK;
            if (conatctPersons == null)
            {
                matelsoResponseBody.StatusMessage = "No data found";
                matelsoResponse.responseBody = matelsoResponseBody;
                return matelsoResponse;
            }

            matelsoResponseBody.StatusMessage = "Object Retrive Successfully";
            matelsoResponseBody.objectVal = conatctPersons;
            matelsoResponse.responseBody = matelsoResponseBody;
            return matelsoResponse;
        }

        [HttpPut("{id}")]
        public async Task<LumResponse> UpdateMaterialsById(string id, MaterialViewModel materialViewModel)
        {
            MaterialViewModel conatctPersons;
            //id = "materials/" + id;
            (conatctPersons, matelsoResponseBody.StatusCode, matelsoResponseBody.StatusMessage) = await _repository.PutMaterials(id,materialViewModel);

            
            if (conatctPersons == null)
            {
                matelsoResponseBody.StatusMessage = "No data found";
                matelsoResponse.responseBody = matelsoResponseBody;
                matelsoResponseBody.StatusCode = HttpStatusCode.MethodNotAllowed;
                return matelsoResponse;
            }

            matelsoResponseBody.StatusMessage = "Object Retrive Successfully";
            matelsoResponseBody.StatusCode = HttpStatusCode.OK;
            matelsoResponseBody.objectVal = conatctPersons;
            matelsoResponse.responseBody = matelsoResponseBody;
            return matelsoResponse;
        }

        [HttpPost]
        public async Task<LumResponse> PostMaterialInfo(MaterialViewModel materialViewModel)
        {
            if (!ModelState.IsValid)
            {
                matelsoResponseBody.StatusCode = HttpStatusCode.BadRequest;
                matelsoResponseBody.StatusMessage = "Validation error";
                matelsoResponse.responseBody = matelsoResponseBody;
                return matelsoResponse;
            }

            try
            {
                (materialViewModel, matelsoResponseBody.StatusCode, matelsoResponseBody.StatusMessage) = await _repository.SaveMaterial(materialViewModel);
                
                
                matelsoResponseBody.StatusMessage = "Successfully saved";
                matelsoResponseBody.StatusCode = HttpStatusCode.Created;
                
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error creating product - Exception message: {ex.Message}");
                matelsoResponseBody.StatusMessage = ex.Message;
                matelsoResponseBody.StatusCode = HttpStatusCode.InternalServerError;
                //return ex.Message;
            }
            
            matelsoResponseBody.objectVal = materialViewModel;
            matelsoResponse.responseBody = matelsoResponseBody;
            return matelsoResponse;
            
        }
    }
}
