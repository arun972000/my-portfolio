/* eslint-disable react/prop-types */

import { Modal} from 'react-bootstrap';

const ProjectLinksModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Full Stack Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>1. Markdown Viewer</h5>
        <p>
          A simple Markdown Viewer project that allows users to input and preview Markdown content.
          It provides a clean interface for viewing formatted text with live updates.
        </p>
        <a href="https://astounding-haupia-9b9a7e.netlify.app/" target="_blank" rel="noopener noreferrer">
          Markdown Viewer Link
        </a>

        <hr />

        <h5>2. Doctor Appointment Booking App</h5>
        <p>
          An application designed for booking doctor appointments. Patients can view available
          time slots, book appointments, and receive confirmation notifications.
          Doctors can manage their schedules and view patient appointments.
        </p>
        <a href="https://stellar-pastelito-8e6c85.netlify.app/" target="_blank" rel="noopener noreferrer">
          Appointment Booking App Link
        </a>

        <hr />

        <h5>3. Online Shopping App (Startup Business)</h5>
        <p>
          A startup online shopping platform for a new business. This app offers a user-friendly
          interface for browsing and purchasing products, managing orders, and exploring promotions.
          It caters to a variety of products for online shoppers.
        </p>
        <a href="https://subtle-pegasus-034313.netlify.app/" target="_blank" rel="noopener noreferrer">
          Online Shopping App Link
        </a>

        <hr />

        <h5>4. Coming Soon</h5>
        <p>
          Exciting new project in the works. Stay tuned for more details!
        </p>
        {/* Link for the fourth project will be added once it's available */}
      </Modal.Body>
     
    </Modal>
  );
};

export default ProjectLinksModal;
