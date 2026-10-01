// Dynamic website data for Dr. Vardhman Jain
// This file contains all the content that can be easily updated

const websiteData = {
    // Hospital Information
    hospital: {
        name: "Delhi Hospital and Temple Nursing Home",
        tagline: "Multi specialty hospital with excellent care",
        description: "Delhi Hospital & Temple Nursing Home is situated in the walled city New Delhi (1 Ansari Road, Darya Ganj). Both are one of the oldest but modern care centers of Delhi. They provide excellent care with ethics and cater to all sections of society. The patients are provided medical & surgical care in a friendly environment. These multi-specialty hospitals are with excellent infrastructure, advanced diagnostic, therapeutic and life support equipments and medical professionals are of very high caliber. The location is also easily accessible.",
        address: "Delhi Hospital, 1, Ansari Rd, Daryaganj, New Delhi, Delhi 110002",
        phone: "+91 9810103230",
        landline: "011-41502511",
        email: "dr.vardhmanjain02@gmail.com",
        whatsapp: "https://api.whatsapp.com/send?phone=919810103230&text=Hello%20doctor,%20I%20want%20to%20schedule%20an%20appointment",
        mapLink: "https://www.google.com/maps/dir/28.6381338,77.2520096/delhi+hospital+and+temple+nursing+home/@28.6395778,77.2447427,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390cfcde4dc07937:0x254dac6221f6f42c!2m2!1d77.2454116!2d28.6408889",
        social: {
            facebook: "",
            twitter: "",
            instagram: "",
            yelp: ""
        }
    },

    // Doctor Information
    doctor: {
        name: "Dr. Vardhman Jain",
        title: "Consultant Orthopedics & Arthroscopic Surgeon",
        experience: "15+ Years",
        bio: "Dr. Vardhman Jain is the best Consultant Orthopedics & Arthroscopic surgeon in Darya Ganj New Delhi. He is having more than 15 years of experience & currently practicing at Delhi Hospital & Temple Nursing Home in Darya Ganj, Central Delhi. As an Orthopedic & Arthroscopic Surgeon, his area of expertise includes Arthroscopy, Sports Injuries along with Fractures (minor, major complex intra articular fracture, Pediatric injuries), Accident Cases (Traumatology, Complex Trauma and Reconstruction.), Joint Pain. Patients from all around Darya Ganj and entire Central Delhi come to Dr. Vardhman Jain with lots of hopes and the doctor ensures that the patients are fully satisfied with the treatments, with his experience.",
        qualifications: [],
        achievements: [
            "15+ Years of experience",
            "Highly Equipped Clinic",
            "Good quality care & service"
        ]
    },

    // Services
    services: [
        {
            id: 1,
            title: "Trauma & Fractures",
            description: "A dedicated and well equiped centre to deal with minor to major complex fractures",
            icon: "fracture",
            image: "Trauma & Fracture.jpg",
            detailedDescription: "Our trauma center is equipped with state-of-the-art facilities to handle all types of fractures, from simple breaks to complex intra-articular fractures. We provide comprehensive care including diagnosis, treatment, and rehabilitation."
        },
        {
            id: 2,
            title: "Arthroscopy & Sports Medicine",
            description: "Arthroscopy allows the surgeon to see inside your joint without making a large incision. Surgeons can even repair some types of joint damage during arthroscopy, with pencil-thin surgical instruments inserted through additional small incisions.",
            icon: "arthroscopy",
            image: "Arthroscopy & Sports Medicine.jpg",
            detailedDescription: "Arthroscopy is a minimally invasive surgical procedure that allows doctors to diagnose and treat joint problems. Using a tiny camera called an arthroscope, we can visualize the inside of the joint and perform repairs through small incisions."
        },
        {
            id: 3,
            title: "Deformity Corrections",
            description: "Deformity correction is a procedure to straighten a bone that is bent or twisted in a way that is not normal. After the bone is straightened, the arm, leg, or foot has normal alignment and function.",
            icon: "deformity",
            image: "Deformity Correction.jpg",
            detailedDescription: "Our deformity correction procedures help patients with bone deformities regain normal alignment and function. Using advanced techniques and equipment, we correct bent or twisted bones to restore mobility."
        },
        {
            id: 4,
            title: "Joint Pain Management",
            description: "Comprehensive treatment for all types of joint pain including arthritis, bursitis, and other degenerative conditions.",
            icon: "joint",
            image: "Joint Replacement Surgery.jpg",
            detailedDescription: "We offer comprehensive joint pain management solutions including conservative treatments, minimally invasive procedures, and surgical interventions when necessary."
        },
        {
            id: 5,
            title: "Sports Injuries",
            description: "Expert treatment for sports-related injuries including ligament tears, muscle strains, and tendon injuries.",
            icon: "sports",
            image: "Sports Medicine.jpg",
            detailedDescription: "Our sports medicine specialists provide comprehensive care for athletes and active individuals, helping them recover and return to their sport safely."
        },
        {
            id: 6,
            title: "Pediatric Orthopedics",
            description: "Specialized care for children's bone and joint conditions including growth-related issues.",
            icon: "pediatric",
            image: "Paediatric OrthoPaedic.png",
            detailedDescription: "We provide gentle, specialized orthopedic care for children, addressing conditions from childhood through adolescence."
        }
    ],

    // Hospital Facilities
    facilities: [
        "Orthopaedics",
        "G Surgery",
        "Obs & Gynae",
        "G Medicine",
        "ENT",
        "Ophthalmology",
        "Dental",
        "Physiotherapy",
        "Dialysis",
        "Homeopathy",
        "Fully loaded Modular Operation Theater",
        "Well equipped Surgical Hospital"
    ],

    // Business Hours
    hours: {
        emergency: "24 hour emergency",
        mondayToSaturday: {
            morning: "10:00 AM – 02:00 PM",
            evening: "6:00 PM – 8:00 PM"
        },
        sunday: "By appointment/emergency"
    },

    // Testimonials
    testimonials: [
        {
            id: 1,
            name: "Dr. Anupreksha Jain",
            text: "I have been under Dr Vardhman's guidance for over 10 years. Have recovered remarkable. Staff is warm and caring.",
            rating: 5
        },
        {
            id: 2,
            name: "Aayush Jain",
            text: "Got excellent diagnosis, advice and treatment from Dr. Vardhman Jain for my ankle ligament tear and finger fracture. Keep up the good work!",
            rating: 5
        },
        {
            id: 3,
            name: "Shyam Khandelwal",
            text: "Finally a doctor that listens. Had been to multiple big name doctors for my knee problem and no luck. Dr. Vardhman Jain cured me in few weeks. Thank You!",
            rating: 5
        }
    ],

    // Quick Links
    quickLinks: [
        { title: "About Us", url: "?page_id=486" },
        { title: "All Services", url: "?page_id=487" },
        { title: "Appointments", url: "https://api.whatsapp.com/send?phone=919810103230&text=Hello%20doctor,%20I%20want%20to%20schedule%20an%20appointment" },
        { title: "Contact Us", url: "?page_id=14" }
    ],

    // SEO
    seo: {
        title: "Dr. Vardhman Jain - Best Orthopedic & Arthroscopic Surgeon in Delhi",
        description: "Dr. Vardhman Jain is the best Consultant Orthopedics & Arthroscopic surgeon in Darya Ganj New Delhi. 15+ years experience in trauma, fractures, arthroscopy, sports injuries.",
        keywords: "orthopedic surgeon, arthroscopic surgeon, sports medicine, trauma, fractures, joint pain, Delhi, Darya Ganj"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = websiteData;
}
