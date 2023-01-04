import React from 'react'

const Doctors = () => {
  return (
    <div>
      <div className='Content-truehealth'>
           <button>Home</button>
           <button>Doctors</button>
       </div>
       <div className='Doctor-container'>
        <h1>Metropolis Doctors Connect</h1>
       </div>

       <div className='Doctor-container-top'>
        <div className='Doctor-container-top-inside'>
            <h5>Doctor Connect</h5>
            <p>We are driven by a single motto – Right Diagnosis leads to Right Treatment. Our detailed test report covers result trend analysis and patient specific interpretations, including comments by our internal doctors in some cases.</p>
            <p>We have a unique approach of giving conclusive diagnosis to our patients, by ways of re-checks and repeat specimen analysis, at no added cost. This has helped us build a very strong equity with doctors and hospitals across our markets globally.</p>
            <p>Our state-of-the-art facilities, global standards, consistent value additions and promoting disease and disorder specific profiles; ensure that doctors have a comprehensive view of their patients, thereby enabling better diagnosis and treatment.</p>
            <p>In addition, as part of building a scientific knowledge ecosystem for better understanding of pathology sciences, Metropolis conducts Round Table Meetings (RTMs), Continued Medical Education programs (CMEs) and Conferences across geographies, acting as an ideation platform for further research and innovation.</p>
        </div>
        <div>
            <img src='https://www.metropolisindia.com/newdata/images/doctors-video.jpg' />
        </div>
       </div>
       <div className='Doctor-container-middle-one'>
       <div>
        <img src='https://www.metropolisindia.com/newdata/images/doctor-1.jpg' />
       </div>
       <div className='Doctor-container-middle-one-inside'>
        <h2>Disease Based Pathology Studies</h2>
        <p>Metropolis is India’s first multi-national chain of diagnostic centers with 100 state of the art laboratories and over 1000 collection centers across India, Sri Lanka and Africa. Our laboratory services has been segmented into 7 core functions. Though many tests and test combinations overlap with each other, all section units work in tandem. The segmentation is critical since the techniques, automation and quality process that each section demands in unique from each other.</p>
       </div>
       </div>
       <div className='Doctor-container-middle-two'>
        <h2>Specialty Testing</h2>
        <div className='Doctor-container-middle-two-section'>
        <div className='Doctor-container-middle-two-first'>
            <p>Oncomet</p>
            <span>Gastromet</span>
            <p>Nephromet</p>
            <p>NeuroUno</p>
            <p>Gynecxpert</p>
        </div>
        <div className='Doctor-container-middle-two-second'>
            <img src='https://www.metropolisindia.com/newdata/images/gastromet.png' />
            <p><strong>GastroMet </strong>is a specialised division of Metropolis that works towards diagnosis of gastroenterology and hepatology. An admixture of uniquely available tests, experienced pathologists and a tenacious effort to cater the uber gastroenterologists, makes GastroMet a unique offering. Main Tests – Includes tests for Hepatitis, Autoimmune Liver disease, Wilson’s disease, Coeliac Disease, IBD, Food Allergy amongst others.</p>
            <p><strong>Capabilities</strong> – GASTROMET offers Comprehensive panel for rapid detection of disease, Advanced technology for accuracy of reporting, Relied upon by thousands of gastroenterology and hepatology specialists, Experienced senior pathologists, NABL and CAP accredited testing centres.</p>
            <p><strong>GASTROMET </strong>by Metropolis offers a basket of 120+ tests for the right diagnosis in Gastroenterology and Hepatology.</p>
        </div>
       </div>
       <hr/>
       </div>
       
       <div className='Doctor-container-Bottom'>
        <div><img src='https://www.metropolisindia.com/newdata/images/doctors.png' /></div>
        <div className='ContactUs-form'>
        <h3>Contact Us</h3>
        <div class="col-lg-5 col-md-12">
        <div class="ml-4">
            <form>
                <div class="row">
                    <div class="col-md-6 form-group">
                        <input id="name" type="text" class="form-control" name="name" placeholder="Name" required />
                    </div>
                    <div class="col-md-6 form-group">
                        <select class="form-control" name="city" id="city">
                            <option value="sc">Select City</option>
                            <option value="chd">Chandigarh</option>
                            <option value="be">Bareilly</option>
                            <option value="amb">Amabala</option>
                            <option value="ambc">Ambala Cantt</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 form-group">
                        <input id="email" type="email" class="form-control" name="email" placeholder="Email" required />
                    </div>
                    <div class="col-md-6 form-group">
                        <input id="phone" type="text" class="form-control" name="phone" placeholder="Phone No."
                            required />
                    </div>

                </div>
                <div class="form-group">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>

                <div class="text-center">
                    <button class="btn contact-button btn-success" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
        </div>
       </div>
    </div>
  )
}

export default Doctors
