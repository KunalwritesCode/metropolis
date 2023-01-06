import React from 'react'

const Partner = () => {
  return (
    <div>
       <div className='Content-truehealth'>
           <button>Home</button>
           <button>Partners</button>
       </div>
       <div className='Partner-container'>
        <h1>Become a Metropolis Partner</h1>
       </div>
       
       <div className='Partner-container-top'>
        <div className='Partner-container-top-inside'>
            <h5>Franchising Opportunities</h5>
            <p>We are looking for Partners who can grow with us and expand our reach to offer best-in-class diagnostic services available across the markets we operate in. Today Metropolis Healthcare is a leading diagnostic player with over 100+ clinical laboratories and 1500+ collection centers across India and 6 other countries. We invite you to be a franchisee and be part of this growth story.</p>
            <p>An association with us offers an ideal environment and platform for a partner to be part of the growing Indian healthcare industry. We offer exciting opportunities to enthusiastic individuals with a strong business acumen and interest in replicating the Metropolis business model successfully in their locality.</p>
            
        </div>
        <div>
            <img src='https://www.metropolisindia.com/newdata/images/partner-video.jpg' />
        </div>
       </div>
       <div className='Doctor-container-Bottom'>
        <div><img src='https://www.metropolisindia.com/newdata/images/doctors.png' /></div>
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
                        <select class="form-control Form-doc " name="city" id="city">
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

export default Partner ;
