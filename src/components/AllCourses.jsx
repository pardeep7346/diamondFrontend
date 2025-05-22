
const AllCourses = () => {
    const courses = [
        {
          title: "Bank Exam",
          description: "Join our institute for comprehensive study materials, mock tests, and personalized guidance to help you succeed in exams like IBPS, SBI, and more.",
          duration: "1 year",
          mode: "Offline",
          targetExams: "IBPS PO, SBI Clerk, RBI Assistant",
          keyFeatures: [
            "Weekly mock tests with detailed analysis",
            "Expert-led live classes and doubt-clearing sessions",
            "Access to 500+ practice questions"
          ]
        },
        {
          title: "SSC Preparation",
          description: "Comprehensive SSC exam preparation with expert guidance, study materials, and regular mock tests to ensure your success.",
          duration: "1 year",
          mode: "Offline",
          targetExams: "SSC CGL, SSC CHSL, SSC MTS",
          keyFeatures: [
            "Daily practice sessions and revision classes",
            "Complete coverage of SSC syllabus",
            "Personalized feedback on mock tests"
          ]
        },
        {
          title: "Railway Exams",
          description: "Specialized training for Railway recruitment exams with focused study materials and exam-oriented preparation strategies.",
          duration: "1 year",
          mode: "Offline",
          targetExams: "RRB NTPC, RRB Group D",
          keyFeatures: [
            "Tailored study plans for RRB exams",
            "Regular updates on exam patterns",
            "Mock tests simulating real exam conditions"
          ]
        },
        {
          title: "Teaching Exams",
          description: "Prepare for teaching exams like CTET and UPTET with our expert-led courses, study materials, and mock tests.",
          duration: "1 year",
          mode: " Offline",
          targetExams: "CTET, UPTET",
          keyFeatures: [
            "Focus on pedagogy and child development",
            "Practice papers for CTET and state TETs",
            "Guidance from experienced educators"
          ]
        },
        {
          title: "Defence Exams",
          description: "Join our Defence exam preparation courses for comprehensive training and expert guidance to excel in exams like NDA, CDS, and more.",
          duration: "1 year",
          mode: "Offline",
          targetExams: "NDA, CDS, AFCAT",
          keyFeatures: [
            "Physical fitness guidance alongside academics",
            "SSB interview preparation",
            "Mock tests for written exams"
          ]
        }
      ];
      const techCourses = [
        {
          title: "Web Development",
          description: "Learn the latest web development technologies and frameworks to build responsive and dynamic websites.",
          duration: "1 year",
          mode: "Online & Offline",
          targetFocus: "Beginners and Intermediate Learners",
          keyFeatures: [
            "Hands-on projects with HTML, CSS, JavaScript, and React",
            "Learn to build responsive websites with modern frameworks",
            "Portfolio development with real-world applications"
          ]
        },
        {
          title: "Digital Marketing",
          description: "Explore the world of digital marketing, including SEO, social media marketing, and content marketing strategies.",
          duration: "3 months",
          mode: "Online",
          targetFocus: "Aspiring Marketers and Business Owners",
          keyFeatures: [
            "Master SEO, SEM, and Google Analytics",
            "Create effective social media campaigns on platforms like Instagram and LinkedIn",
            "Learn content marketing and email marketing strategies"
          ]
        },
        {
          title: "Mobile App Development",
          description: "Learn how to develop mobile applications for Android and iOS platforms using the latest tools and technologies.",
          duration: "5 months",
          mode: "Online & Offline",
          targetFocus: "Developers and Tech Enthusiasts",
          keyFeatures: [
            "Develop apps using Flutter and React Native",
            "Build projects for both Android and iOS platforms",
            "Guidance on app deployment to Google Play Store and App Store"
          ]
        },
        {
          title: "Cybersecurity",
          description: "Understand the principles of cybersecurity and learn how to protect systems and networks from cyber threats.",
          duration: "4 months",
          mode: "Online",
          targetFocus: "IT Professionals and Security Enthusiasts",
          keyFeatures: [
            "Learn ethical hacking and penetration testing",
            "Understand network security and data encryption",
            "Hands-on labs with real-world cyber threat scenarios"
          ]
        },
        {
          title: "Tally & GST",
          description: "Master Tally and GST for effective accounting and tax management. Learn practical skills for real-world applications.",
          duration: "2 months",
          mode: "Offline",
          targetFocus: "Accountants and Small Business Owners",
          keyFeatures: [
            "Practical training on Tally ERP 9 for accounting",
            "In-depth understanding of GST compliance and filing",
            "Real-world case studies for tax management"
          ]
        }
      ];
  return (
   
      <div className="min-h-screen p-2 md:p-4">
          <div className='bg-white/5 border border-white/20 py-4 rounded-2xl md:rounded-4xl mx-2 md:mx-8 my-2 md:my-4'>
              {/* Main Heading */}
              <h1 className='text-2xl md:text-5xl font-black text-center bg-gradient-to-tr from-pink-500 via-red-500 to-blue-500 bg-clip-text text-transparent px-2 mb-4'>
                  "Courses We Offer"
              </h1>

              {/* Exam Preparation Section */}
              <div>
                  <h2 className='text-center font-bold text-2xl md:text-4xl border-t mt-3 md:mt-5 mx-3 md:mx-5 pt-3 md:pt-5'>
                      Exam Preparation
                  </h2>
              </div>

              {/* Exam Courses Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-3 md:p-6'>
                  {courses.map((course, index) => (
                      <div 
                          key={index} 
                          className='backdrop-blur-sm p-4 rounded-lg shadow-lg shadow-zinc-700 border border-rose-500 flex flex-col justify-between min-h-[320px] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
                      >
                          <div>
                              <h2 className='text-xl md:text-2xl font-semibold mb-2'>{course.title}</h2>
                              <p className='text-sm md:text-base mb-2'>{course.description}</p>
                              <div className='space-y-1'>
                                  <p className='text-sm'><strong>Duration:</strong> {course.duration}</p>
                                  <p className='text-sm'><strong>Mode:</strong> {course.mode}</p>
                                  <p className='text-sm'><strong>Target Exams:</strong> {course.targetExams}</p>
                              </div>
                          </div>
                          <ul className='list-disc pl-5 mt-3 text-sm space-y-1'>
                              {course.keyFeatures.map((feature, idx) => (
                                  <li key={idx} className='text-sm md:text-base'>{feature}</li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>

              {/* Tech Courses Section */}
              <div className='text-center font-bold text-2xl md:text-4xl border-t mt-3 md:mt-5 mx-3 md:mx-5 pt-3 md:pt-5'>
                  Tech Courses
              </div>

              {/* Tech Courses Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-3 md:p-6'>
                  {techCourses.map((course, index) => (
                      <div 
                          key={index} 
                          className='backdrop-blur-sm p-4 rounded-lg shadow-lg shadow-zinc-700 border border-rose-500 flex flex-col justify-between min-h-[320px] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
                      >
                          <div>
                              <h2 className='text-xl md:text-2xl font-semibold mb-2'>{course.title}</h2>
                              <p className='text-sm md:text-base mb-2'>{course.description}</p>
                              <div className='space-y-1'>
                                  <p className='text-sm'><strong>Duration:</strong> {course.duration}</p>
                                  <p className='text-sm'><strong>Mode:</strong> {course.mode}</p>
                                  <p className='text-sm'><strong>Target Focus:</strong> {course.targetFocus}</p>
                              </div>
                          </div>
                          <ul className='list-disc pl-5 mt-3 text-sm space-y-1'>
                              {course.keyFeatures.map((feature, idx) => (
                                  <li key={idx} className='text-sm md:text-base'>{feature}</li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>
          <div>
           
          </div>
      </div>
  )
  
}

export default AllCourses
