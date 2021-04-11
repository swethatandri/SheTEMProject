//set mathq = input from math question
//output type is string
var mathq;
if (mathq <= 2)
{
  var science;
  var tech;
  for (var x = 0; x < 4; x++)
  {
    //run st questions
    //check if question is science or tech
    //increment accordingly (science+value, tech+value)
  }
  if (science > tech)
  {
    var biology;
    var chemistry;
    var physics;
    for (var x = 0; x < 6; x++)
    {
      //run biochemphys questions
      //check if question is bio, chem, or physics
      //increment accordingly (biology+value, chemistry+value, physics+value)
    }
    if (biology > chemistry && biology > physics)
    {
      var surgeon;
      var researcher;
      for (var x = 0; x < 4; x++)
      {
        //run surgeon/researcher questions
        //check if question is surgeon or researcher
        //increment accordingly (surgeon+value, researcher+value)
      }
      if (surgeon > researcher)
      {
        //go to finishing slide
        //print surgeon and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print researcher and description of job and traits needed for it
      }
    }
    else if (chemistry > biology && chemistry > physics)
    {
      var forensics;
      var chemist;
      for (var x = 0; x < 4; x++)
      {
        //run forensics/chemist questions
        //check if q is forensics or chemist
        //increment accordingly (forensics+value, chemist+value)
      }
      if (forensics > chemist)
      {
        //go to finishing slide
        //print forensic analyst and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print forensic analyst and description of job and traits needed for it
      }
    }
    else
    {
      var astronomer;
      var physicist;
      for (var x = 0; x < 4; x++)
      {
        //run astronomer/physicists questions
        //check if q is astronomer or physicist
        //increment accordingly
      }
      if (astronomer > physicist)
      {
        //go to finishing slide
        //print astronomer and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print physicist and description of job and traits needed for it
      }
    }
  }
  else
  {
    //tech section
    var software;
    var reality;
    var intelligence;
    var pretty;
    for (var x = 0; x < 8; x++)
    {
        //run software/reality/intelligence/pretty questions
        //check if q is software, reality, intelligence or pretty
        //increment accordingly
    }
    if (software > reality && software > intelligence && software > pretty)
    {
      var softwareEng;
      var backEnd;
      for (var x = 0; x < 2; x++)
      {
        //run softwareEng/backEnd questions
        //check if q is softwareEng or backEnd
        //increment accordingly (softwareEng+value, backEnd+value)
      }
      if (softwareEng > backEnd)
      {
        //go to finishing slide
        //print software engineer and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print back-end programmer and description of job and traits needed for it
      }
    }
    else if (reality > intelligence && reality > pretty)
    {
      var cybersecurity;
      var virtualReality;
      for (var x = 0; x < 2; x++)
      {
        //run cybersecurity/VR questions
        //check if q is cybersecurity or VR 
        //increment accordingly (cybersecurity+value, virtualReality+value)
      }
      if (cybersecurity > virtualReality)
      {
        //go to finishing slide
        //print cybersecurity analyst and description of job and traits needed for it
      }
      else 
      {
        //go to finishing slide
        //print VR developer and description of job and traits needed for it
      }
    }
    else if (pretty > intelligence)
    {
      var frontEnd;
      var graphicDes;
      for (var x = 0; x < 2; x++)
      {
        //run front-end/graphic design questions
        //check if q is front-end or graphic design 
        //increment accordingly (frontEnd+value, graphicDes+value)
      }
      if (frontEnd > graphicDes)
      {
        //go to finishing slide
        //print front-end developer and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print graphic designer and description of job and traits needed for it
      }
    }
    else
    {
      var dataEng;
      var aiResearch;
      for (var x = 0; x < 2; x++)
      {
        //run data engineer/AI researcher questions
        //check if q is data engineer or ai research 
        //increment accordingly (dataEng+value, aiResearch+value)
      }
      if (dataEng > aiResearch)
      {
        //go to finishing slide
        //print data engineer and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print AI researcher and description of job and traits needed for it
      }
    }
  }
}
else
{
  //em section
  var engineering;
  var math;
  for (var x = 0; x < 4; x++)
  {
    //run em questions
    //check if question is science or tech
    //increment accordingly (engineering+value, math+value)
  }
  if (engineering > math)
  {
    var buildy;
    var electricity;
    var parts;
    var fake;
    for (var x = 0; x < 8; x++)
    {
      //run buildElecPartFake questions
      //check if question is buildy, electricity, parts, or fake
      //increment accordingly (buildy+value, electricity+value, parts+value, fake+value)
    }
    if (buildy > electricity && buildy > parts && buildy > fake)
    {
      var aerospace;
      var mechanical;
      for (var x = 0; x < 4; x++)
      {
        //run aerospace/mechanical questions
        //check if question is aerospace or mechanical
        //increment accordingly (aerospace+value, mechanical+value)
      }
      if (aerospace > mechanical)
      {
        //go to finishing slide
        //print aerospace engineer and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print mechanical engineer and description of job and traits needed for it
      }
    }
    else if (electricity > parts && electricity > fake)
    {
      var electric;
      var compEng;
      for (var x = 0; x < 4; x++)
      {
        //run electric/computer questions
        //check if q is electric or computer
        //increment accordingly (electric+value, compEng+value)
      }
      if (electric > compEng)
      {
        //go to finishing slide
        //print electric engineer and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print computer engineer and description of job and traits needed for it
      }
    }
    else if (parts > fake)
    {
      var civil;
      var material;
      for (var x = 0; x < 4; x++)
      {
        //run civil/material questions
        //check if q is civil or material
        //increment accordingly (civil+value, material+value)
      }
      if (civil > material)
      {
        //go to finishing slide
        //print civil engineer and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print material engineer and description of job and traits needed for it
      }
    }
    else
    {
      var biomed;
      var chemEng;
      for (var x = 0; x < 4; x++)
      {
        //run biomed/chemEng questions
        //check if q is biomed or chemEng
        //increment accordingly
      }
      if (chemEng > biomed)
      {
        //go to finishing slide
        //print biomedical engineer and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print chemical engineer and description of job and traits needed for it
      }
    }
  }
  else
  {
    //math section
    var mathy;
    var money;
    var cool;
    for (var x = 0; x < 6; x++)
    {
        //run mathy/money/cool questions
        //check if q is mathy, money, or cool
        //increment accordingly 
    }
    if (mathy > money && mathy > cool)
    {
      var stats;
      var professor;
      for (var x = 0; x < 2; x++)
      {
        //run stats/prof questions
        //check if q is stats or prof
        //increment accordingly (stats+value, professor+value)
      }
      if (stats > professor)
      {
        //go to finishing slide
        //print statistician and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print math professor and description of job and traits needed for it
      }
    }
    else if (money > cool)
    {
      var finance;
      var econ;
      for (var x = 0; x < 2; x++)
      {
        //run finance/econ questions
        //check if q is finance or econ 
        //increment accordingly 
      }
      if (finance > econ)
      {
        //go to finishing slide
        //print financial analyst and description of job and traits needed for it
      }
      else 
      {
        //go to finishing slide
        //print economist and description of job and traits needed for it
      }
    }
    else
    {
      var crypto;
      var cartographer;
      for (var x = 0; x < 2; x++)
      {
        //run data crypto/cartographer questions
        //check if q is crypto or cartographer 
        //increment accordingly (crypto+value, cryptographer+value)
      }
      if (cartographer > crypto)
      {
        //go to finishing slide
        //print cartographer and description of job and traits needed for it
      }
      else
      {
        //go to finishing slide
        //print cryptoanalyst and description of job and traits needed for it
      }
    }
  }
}