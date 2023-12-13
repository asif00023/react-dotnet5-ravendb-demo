﻿using System;
using System.ComponentModel.DataAnnotations;

namespace lum.view.model.ViewModel
{
    public class ContactPersonViewModel
    {
        public string Id { get; set; }
        [Required]
        [MinLength(2)]
        public string Salutation { get; set; }
        [Required]
        [MinLength(2)]
        public string Firstname { get; set; }
        [Required]
        [MinLength(2)]
        public string Lastname { get; set; }
        public string? Displayname { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{yyyy-MM-dd}")]
        public DateTime? Birthdate { get; set; }
        
        public string? NotifyHasBirthdaySoon { get; set; }
        public string Email { get; set; }
        public string? Phonenumber { get; set; }
    }


}
