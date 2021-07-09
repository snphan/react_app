import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    }
  }
}