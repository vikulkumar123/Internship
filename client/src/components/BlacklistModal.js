import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  Label
} from "reactstrap";

class BlacklistModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader>Blacklist Developer</ModalHeader>
          <ModalBody>
            <Form className="form" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-6 padding  offset-md-3">
                  <div className="row">
                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <Label htmlFor="firstname" className="label">
                          First Name *
                        </Label>
                        <Input
                          id="firstname"
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="Please enter firstname"
                          //   value={this.state.firstname}
                          //   onChange={this.handleChange}
                          //   onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </ModalBody>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    );
  }
}

export default BlacklistModal;
