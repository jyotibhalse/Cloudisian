import React from 'react';
import './popup.css';

function Popup() {
  // No timer, no onClose needed

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Removed close button */}
        <div className="popup-icon">❤️</div>
                
        <p>
          🤝 Trusted by 400+ top companies for placements<br />
          📍 Presence in 500+ locations across India
        </p>

  
        <div className="stats-grid1">
    <div className="stat-card1">
      <span role="img" aria-label="applicants">👥</span>
      <h3>30,000+</h3>
      <p>Applicants</p>
    </div>
    <div className="stat-card1">
      <span role="img" aria-label="companies">🏢</span>
      <h3>484+</h3>
      <p>Partner Companies in India</p>
    </div>
     <div className="stat-card1">
      <span role="img" aria-label="companies">🏢</span>
      <h3>400+</h3>
      <p>Partner Companies in Middle East</p>
    </div>
     <div className="stat-card1">
      <span role="img" aria-label="companies">🏢</span>
      <h3>50+</h3>
      <p>Partner Companies in USA & UK</p>
    </div>
    <div className="stat-card1">
      <span role="img" aria-label="jobs">💼</span>
      <h3>150+</h3>
      <p>Active Jobs</p>
    </div>
  </div>

        {/* Scrolling logos example from before */}
        <div className="logo-slider">
          <div className="slider-track">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CQU9Fn4iaSW49ZhSmy-en8Ez4DcaN9KkjQ&s" alt="TCS" />
            <img src="https://purepng.com/public/uploads/large/purepng.com-pepsi-logologobrand-logoiconslogos-251519939637gwaqk.png" alt="Infosys" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4UejbPoA8w9geuB9SK4fTNMJsZpJEkgCDQ&s" alt="Wipro" />
            <img src="https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/e1baf855-978b-4fb9-847a-b498dcc98abd.png" alt="Accenture" />
            <img src="https://kirbysoutheastasia.com/wp-content/uploads/2021/03/kirby.png" alt="HCL" />
            <img src="https://www.bkgulf.com/images/librariesprovider2/default-album/logo.png?sfvrsn=2a3b1bd3_7" alt="IBM" />
            {/* duplicated for infinite scroll */}
            <img src="https://logovtor.com/wp-content/uploads/2019/12/tekfen-construction-logo-vector.png" alt="TCS" />
            <img src="https://images.seeklogo.com/logo-png/30/2/hyundai-logo-png_seeklogo-309777.png" alt="Infosys" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6vjoyJOVVkdiFzD3YvzLuq02vODtLKpg6WQ&s" alt="Wipro" />
            <img src="https://www.ifma.org/media/j4nhsj5m/alghanim.webp" alt="Accenture" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Knpc_logo.png" alt="HCL" />
            <img src="https://sepam.com/wp-content/uploads/2020/07/Sepam-Logo.png" alt="IBM" />
            <img src="https://img.favpng.com/12/2/2/daewoo-e-c-construction-engineering-company-logo-png-favpng-BQKnjHdPQspXxE2YNtedU86yF.jpg" alt="Infosys" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/KBR_%28company%29_logo.svg/1200px-KBR_%28company%29_logo.svg.png" alt="Wipro" />
            <img src="https://www.aljaberqatar.com/wp-content/uploads/2023/08/aljaber-logo-original-2048x699.png" alt="Accenture" />
            <img src="https://www.emiratessteelllc.com/uploaded_files/userfiles/images/SNS-logo.png" alt="HCL" />
            {/* duplicated for infinite scroll */}
            <img src="https://www.clipartmax.com/png/middle/423-4235248_partners-katerra-construction-logo.png" alt="TCS" />
            <img src="https://c0.klipartz.com/pngpicture/272/718/gratis-png-al-rajhi-banco-negocio-rajhi-industria-del-acero-negocios.png" alt="Infosys" />
            <img src="https://www.tasami.com.sa/Pic/logo/logo-removebg-preview.png" alt="Wipro" />
            <img src="https://daleli.sa/media/logos/CompanyLogo-1606034792_logo.jpg" alt="Accenture" />
            <img src="https://careers.aasu.edu.kw/admin/uploaded/logo/logo.png" alt="HCL" />
            <img src="https://www.focalbg.com/wp-content/uploads/2021/02/logo_focal_building_group.png" alt="IBM" />
            <img src="https://almaziad.com/wp-content/uploads/2022/11/Main-Logo.png" alt="Wipro" />
            <img src="https://i0.wp.com/pride-laminates.com/wp-content/uploads/2024/11/cropped-cropped-pride-new-logo.webp?fit=512%2C512&ssl=1" alt="Accenture" />
            <img src="https://cdn.vectorstock.com/i/500p/19/04/onx-letter-logo-design-on-white-background-vector-43551904.jpg" alt="HCL" />
            <img src="https://media.licdn.com/dms/image/v2/D560BAQFuSpzDxziCeg/company-logo_200_200/company-logo_200_200/0/1696390435670/methodica_technologies_logo?e=2147483647&v=beta&t=7gW_7AdoAHJkiChE-vhv_4x-RL5iaed7exPjLPwVu1k" alt="IBM" />
            <img src="https://en.khalejy.com/wp-content/uploads/2024/09/Almana-Group-jobs.png" alt="Wipro" />
            <img src="https://pbs.twimg.com/profile_images/1543560661401309186/BJNwrv9x_400x400.jpg" alt="Accenture" />
            <img src="https://content.jdmagicbox.com/v2/comp/chennai/s8/044pxx44.xx44.220511042718.i2s8/catalogue/chn-technologies-pvt-ltd-adyar-chennai-database-management-services-fdf05xkbwq.jpg" alt="HCL" />
            <img src="https://live.staticflickr.com/2473/3632849767_3f328e4b63_b.jpg" alt="Accenture" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/768px-Dell_Logo.svg.png" alt="HCL" />
            <img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/666ad33b90b7c3001de29d42.png" alt="Accenture" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX45ap6_q1or6TwQv8Le5pvc2HZQvJpA6mOA&s" alt="HCL" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJg0JbcnXCQ3ePwTSmJHXBVcTkeY2vxiSzg&s" alt="Accenture" />
            <img src="https://img.favpng.com/6/22/5/future-generali-india-insurance-life-insurance-assicurazioni-generali-company-png-favpng-4fGuuBC2LMvdiwZkqdyAPjh2x.jpg" alt="HCL" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToq1xjbB7WmHk1Vt_YY5aVMnMYvNwDV02llA&s" alt="IBM" />
            <img src='https://scaler-blog-prod-wp-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/09/22114305/Scaler-HT-1--860x484.png' alt='tcs'/>
            <img src='https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/jbaqnkrzl37j15eg6479' alt='tcs'/>
            <img src='https://i.pinimg.com/736x/6c/e1/c9/6ce1c9e2938facc78520bf945097618a.jpg' alt='tcs'/>
            <img src='https://luxurylifestyleawards.com/wp-content/uploads/2021/02/sobha-realty-logo.jpg' alt='tcs'/>
            <img src='https://image.2gosoftware.eu/img/605/340/catalog/McAfee/2024/Video%20content/EN-McAfee-Why-McAfee-video-thumbnail.png' alt='tcs'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSr3Sr-I-o8436VQfOHf38PqbfN3YyUMWXaw&s' alt='tcs'/>
            <img src='https://www.boardinfinity.com/blog/content/images/2024/11/Company-Blog-Creatives---23-.png' alt='tcs'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/2560px-Tech_Mahindra_New_Logo.svg.png' alt='tcs'/>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDfsgji0OuaBjEZWnGPJpA9VUu554AbO51yQ&s' alt='tcs'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_IDFC_First_Bank.svg/1200px-Logo_of_IDFC_First_Bank.svg.png' alt='tcs'/>
             <img src='https://1000logos.net/wp-content/uploads/2022/12/Panasonic-logo.png' alt='tcs'/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
