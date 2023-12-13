using lum.db.model;
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
    public interface IContactRepository
    {
        Task<ActionResult<IEnumerable<ContactPersonViewModel>>> GetAllContactPersonsAsync();
        Task<ActionResult<ContactPersonViewModel>> GetContactPersonById(string id);

        Task<(ContactPersonViewModel, HttpStatusCode, string)> UpdateContactPerson(ContactPersonViewModel contactPersonRm, string id);
        Task<(ContactPersonViewModel, HttpStatusCode, string)> SaveContactPerson(ContactPersonViewModel contactPersonRm);
        Task<(string, HttpStatusCode, string)> DeleteContactPerson(string id);
        
    }
}
