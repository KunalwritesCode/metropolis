import React from 'react'

const Corporate = () => {
  return (
    <div>
       <div className='Content-truehealth'>
           <button>Home</button>
           <button>Corporate Wellness</button>
       </div>

       <div className='Partner-container'>
        <h1>Metropolis Presents Corporate Wellness Solutions</h1>
       </div>

       <div className='Corporate-container-top'>
        <div className='Corporate-container-top-1'>
            <h3>Corporate Wellness</h3>
            <p>According to India Brand Equity Foundation the Indian healthcare sector, is expected to record a threefold rise, at a CAGR of 22 percent during 2016-2022 to reach US$ 372 billion in 2022 from US$ 110 billion in 2016.</p>
            <p>Stress is good as it keeps oneself busy and help to reach the goal. But when stress becomes routine part of the life, it could affect one’s health severely. Work pressure can lead to chronic diseases like diabetes, insomnia, obesity, hypertension and even heart disease as well. It is observed that people who are under stress often move towards unhealthy habits like munching on junk food, drug abuse, alcohol, cigarettes etc.</p>
            <p>Being a pathology specialist, we understand the need and to bridge this gap, we offer services that are flexible and customized to suit the requirement of our client. These health packages are comprehensive and preventive, which helps to monitor and takes care of well-being of employee.</p>
            <p>As it is rightly said “Health is wealth”, many organizations are taking special care for their employees, by introducing corporate wellness program. This is a win- win situation for both the employers and the employee. This helps the company to monitor the health of its work force and avoid absenteeism and under performance along with employee retention. On the other hand employees contribute to the company in a productive and efficient manner.</p>
        </div>
        <div>
            <img src='https://www.metropolisindia.com/newdata/images/partner-video.jpg' />
        </div>
       </div>

       <div className='Corporate-container-mid'>
        <div><img src='https://www.metropolisindia.com/newdata/images/corporate-1.jpg' /></div>
        <div className='Corporate-container-mid-1'>
            <h3>Why Partner with us</h3>
            <p>Our strength lies in providing quality diagnostic service, as our global reference laboratory in Mumbai is accredited by CAP (College of American Pathologist), NABL (National Accreditation Board for Testing and Calibration laboratories), ISO15189, and these quality certifications are indicators that we keep pace with global quality standards.</p>
        </div>
       </div>

       <div className='Corporate-container-bottom'>
        <div className='Corporate-container-bottom-1'>
            <h3>Wellness and Related Healthcare Services</h3>
            <p>Our experience in diagnostic and related healthcare testing and services has allowed us to selectively combine diagnostic tests into diverse profiles to assist patients seeking to monitor their health and to prevent or treat diseases and other health conditions. These packages are a combination of a variety of early detection and diagnostic tests to screen selected diseases and disorders with primary focus on life style diseases. Based on age, gender, clinical history, parental history and affordability, there are options of several packages. Besides pathology tests, the packages also include non-pathology tests such as ECG, X-ray, ultra-sound and stress test. The reports issued by us include basic medical advice and are presented in a reader-friendly format.</p>
            
        </div>
        <div>
            <img src='https://www.metropolisindia.com/newdata/images/corporate-2.jpg' />
        </div>
       </div>
       <div className='ContactUs-form'>
        <h3>Contact Us</h3>
        <div class="col-lg- col-md-12 Doctor-form" >
        <div class="ml-4">
            <form>
                <div class="row">
                    <div class="col-md-6 form-group">
                        <input id="name" type="text" class="form-control" name="name" placeholder="Name" required />
                    </div>
                    <div class="col-md-6 form-group">
                        <select class="form-control Form-doc" name="city" id="city">
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
  )
}

export default Corporate
