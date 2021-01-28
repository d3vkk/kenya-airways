<template>
  <div>
    <NavBar />
    <div class="px-3 py-6">
      <h1>Pacific Coordination Center Senior Manager</h1>
      <div class="py-3">
        <p>Job Type: Full Time</p>
        <p>Qualification: BA/BSc/HND</p>
        <p>Experience: 5 years</p>
        <p>Location: Nairobi</p>
        <p>Job Field: Aviation / Airline</p>
      </div>
      <div class="py-3">
        <h2>Job Purpose Statement</h2>
        <p>
          Responsible for overall Cargo, Mail and courier security to implement,
          enforce and coordinate security systems and procedures for Kenya
          Airways terminals, freighters, cargo, mail and courier shipments
          network wide, in order to meet objectives of Kenya Airways and the
          requirements of KCAA as per NCASP minimum requirements, European Union
          requirements on RA3/ACC3, TSA Model security program regulatory
          requirements on cargo security and IATA International Aviation
          Regulations on cargo security.
        </p>
      </div>
      <div class="py-3">
        <h2>Key duties and responsibilities</h2>
        <ul>
          <li>
            Ensure compliance with regulatory standards – IATA Cargo Standards,
            KCAA Regulated Agent regime, EU Regulations on Cargo Security and
            TSA Regulations on cargo security.
          </li>
          <li>
            Develop and ensure implementation of procedures for effective
            screening and secure storage of cargo, courier and mail during
            handling. Manage cargo, Courier and Mail screening and address all
            X-RAY maintenance.
          </li>
          <li>
            Develop and ensure implementation of processes and procedures to
            address cargo terminal and airside security.
          </li>
          <li>
            Ensure full implementation of cargo security SLAs by cargo handlers
            and Cargo Customer Airlines.
          </li>
          <li>
            Continuously assess risks and threats of cargo security operations
            and implement mitigating action network wide.
          </li>
          <li>
            Coordinate gathering of intelligence on acts of unlawful
            interference against cargo operations and analyze, collect data and
            initiate counter measures.
          </li>
          <li>Revamp Quality control activities at cargo operations.</li>
          <li>
            Prepare, monitor and control the Cargo security budget to ensure
            effective cost control.
          </li>
          <li>
            Ensure effective management of Cargo operations Security staff HR
            issues to drive high performance.
          </li>
          <li>
            Ensure that the company meets its contract obligation with regards
            to Cargo customer airlines being provided with security services by
            Kenya Airways’ security.
          </li>
        </ul>
      </div>
      <div class="py-3">
        <h2>Qualifications</h2>
        <ul>
          <li>University degree or relevant professional qualification</li>
          <li>
            At least five years’ experience in security management in a
            reputable organization.
          </li>
          <li>
            Advanced university degree in a relevant discipline will be added
            advantage Additional certification on ware housing operations will
            be added advantage
          </li>
          <li>Excellent communication and interpersonal skills</li>
          <li>Organizational, planning and analytical skills.</li>
          <li>IT proficiency</li>
          <li>Knowledge of Criminal Procedure, Penal Code and Evidence Act.</li>
          <li>Security certification form a recognized institution</li>
        </ul>
      </div>
      <div class="py-3">
        <h2>Desired Behavioral competencies</h2>
        <ul>
          <li>Excellent leadership skillsExcellent leadership skills</li>
          <li>Excellent interpersonal and communication skills</li>
          <li>Industry and market knowledge</li>
          <li>High integrity</li>
          <li>Team player</li>
          <li>Humility</li>
          <li>Coaching & mentoring others</li>
        </ul>
      </div>
      <div class="py-3">
        <h2>Method of Application</h2>
        <p>
          Interested and qualified? Go to Kenya Airways on
          <a href="kenyaairways.taleo.net">kenyaairways.taleo.net</a> to apply
        </p>
      </div>
      <div class="py-3">
        <button
          class="p-2 text-sm font-medium tracking-wide text-white bg-green-700 rounded-md hover:bg-black"
          @click="printJob()"
        >
          Print
        </button>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import "../../public/vendor/tailwind.min.css";
import NavBar from "../layouts/NavBar";
import FooterSection from "../layouts/FooterSection";
import { jsPDF } from "jspdf";

export default {
  components: {
    NavBar,
    FooterSection,
  },
  methods: {
    printJob() {
      const timeNow = new Date();
      const printText = `
      Pacific Coordination Center Senior Manager

      Job Type: Full Time
      Qualification: BA/BSc/HND
      Experience: 5 years
      Location: Nairobi
      Job Field: Aviation / Airline


      Job Purpose Statement

      Responsible for overall Cargo, Mail and courier security to implement,
      enforce and coordinate security systems and procedures for Kenya
      Airways terminals, freighters, cargo, mail and courier shipments
      network wide, in order to meet objectives of Kenya Airways and the
      requirements of KCAA as per NCASP minimum requirements, European Union
      requirements on RA3/ACC3, TSA Model security program regulatory
      requirements on cargo security and IATA International Aviation
      Regulations on cargo security.



      Key duties and responsibilities

      Develop and ensure implementation of procedures for effective
      screening and secure storage of cargo, courier and mail during
      handling. Manage cargo, Courier and Mail screening and address all
      X-RAY maintenance.


      Develop and ensure implementation of processes and procedures to
      address cargo terminal and airside security.


      Ensure full implementation of cargo security SLAs by cargo handlers
      and Cargo Customer Airlines.


      Continuously assess risks and threats of cargo security operations
      and implement mitigating action network wide.


      Coordinate gathering of intelligence on acts of unlawful
      interference against cargo operations and analyze, collect data and
      initiate counter measures.

      Revamp Quality control activities at cargo operations.

      Prepare, monitor and control the Cargo security budget to ensure
      effective cost control.


      Ensure effective management of Cargo operations Security staff HR
      issues to drive high performance.


      Ensure that the company meets its contract obligation with regards
      to Cargo customer airlines being provided with security services by
      Kenya Airways’ security.




      Qualifications

      University degree or relevant professional qualification

      At least five years’ experience in security management in a
      reputable organization.


      Advanced university degree in a relevant discipline will be added
      advantage Additional certification on ware housing operations will
      be added advantage

      Excellent communication and interpersonal skills
      Organizational, planning and analytical skills.
      IT proficiency
      Knowledge of Criminal Procedure, Penal Code and Evidence Act.
      Security certification form a recognized institution



      Desired Behavioral competencies

      Excellent leadership skillsExcellent leadership skills
      Excellent interpersonal and communication skills
      Industry and market knowledge
      High integrity
      Team player
      Humility
      Coaching & mentoring others



      Method of Application

      Interested and qualified? Go to Kenya Airways on
      kenyaairways.taleo.netto apply
      `;
      const pdf = new jsPDF();
      pdf.text(printText, 10, 10);
      pdf.save(`Job,${timeNow}.pdf`);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 1.25rem;
  color: #e91d24;
}
</style>
