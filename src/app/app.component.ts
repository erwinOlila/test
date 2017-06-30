import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  aboutMe = `
    I am an electrical engineer who is currently studying Control Systems in my
    masters in University of San Carlos. I have experience in embedded systems,
    circuit design, soldering, 3D modelling and wireless communications which I
    learned while working with my thesis. I also have experience as a test
    engineer so I am confident with my debugging skills.
    I am also interested in DIY, aquaponics, robotics, web development, video games and also space exploration.
  `;

  contactDetails = [
    'Registered Electrical Engineer',
    'ce.olila@gmail.com',
    '09205462207',
    'Cebu, Philippines'
  ];

  rightTitles = [
    'Work History',
    'Education'
  ];


  educations = [
    "Bachelor's of Science in Electrical Engineering: '08-'13",
    `Master's of Engineering in Electrical Engineering: Control Systems Options
    '15-present'`
  ];

  experiences = {

    myWorks: [
      {
        title : "Test Engineer - Teradyne Inc.: '14-'15",
        section_1 : [
          `Ensure the quality of test equipment through validation and
          verification of programs, upgrade and repair`,
          `Do debugging failure analysis process on test equipment through the
           use of digital and analog test systems.`,
           `Monitor the quality of repaired testing equipment and provide
           actions to solve customer/repair/product issues`
        ]
      }
    ],
    academia: [
      {
        title : `Master's of Engineering in Electrical Engineering: Control
        Systems Options: '15-present`,
        section_1 : [
          {
            title : `Compilaton of Algorithms for Numerical Methods`,
            details : [`
                Some Methods included: Solutions to Nonlinear Equations,
                Interpolation and Polynomial Approxmation Curve Fitting,
                Numerical Integration and Differentiation`,
                'Software Used: Matlab'
              ]
          },
          {
            title : `Designed and built an analog control system for Magnetic
            Levitator`,
            details : [
                'Model: State Space',
                'Control Design: Pole Placement',
                'Software Used: Matlab - Sisotool'
              ]
          },
          {
            title : `Implementation of Digital Control System for Motor
            Speed Control`,
            details : [
                'Model: Transfer Function',
                `Control Design: Pole Placement (controller function was
                 converted into controller sequence)`,
                'Hardware: Arduino',
                `Software: Matlab - Sisotool and Matlab's Parameter Estimation
                App`
              ]
          },
          {
            title : `Implementation of Load Monitoring and Control on TelosB
            Motes`,
            details : [
                'Hardwares: TelosB, Raspberry Pi 3',
                'Languages: NesC, Python',
                'Software: Eagle'
              ]
          },
          {
            title : `Development of Energy Management System for Educational
            Institution`,
            details : [
                `The system automates the utilization of electrical loads of
                classrooms based on the collected data of room schedules, date
                of utilization, room occupancy status and added with reservation
                mechanism.`,
                'Languages: Arduino/C, Python',
                `Software: Sketchup (for 3D modelling of device enclosures),
                Eagle`,
                `Major Activities: Programming, Soldering and Assembling,
                Testing and Debugging`
              ]
          }
        ]
      },
      {
        title : `Bachelors of Science in Electrical Engineering '08-'13`,
        section_1 : [
          {
            title : `Dean's Lister`,
            details : []
          },
          {
            title : `Cum Laude`,
            details : []
          }

        ]
      }
    ]
  }

  onClick() {
    console.log(this.experiences.myWorks[0].title);
  }
}
