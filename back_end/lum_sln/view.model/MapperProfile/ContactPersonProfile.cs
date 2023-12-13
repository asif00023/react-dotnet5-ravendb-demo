

using AutoMapper;
using lum.db.model;
using lum.view.model.ViewModel;
using System;

namespace lum.view.models.MapperProfile
{
    public class ContactPersonProfile:Profile
    {
        public ContactPersonProfile()
        {
            //CreateMap<ContactPersonViewModel, ContactPerson>().ReverseMap();
            CreateMap<ContactPersonViewModel, ContactPerson>().ReverseMap().ForMember(dest => dest.NotifyHasBirthdaySoon, opt => opt.MapFrom(src => String.Empty));
                        
        }
    }
}
