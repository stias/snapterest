import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';
import { setCollectionName, setEditingName, toggleIsEditingName } from "../actions";
import { connect } from "react-redux";

const inputStyle = {
    marginRight: '5px'
};

class CollectionRenameForm extends Component {
    handleFormSubmit = (event) => {
        event.preventDefault();

        const {
            onChangeCollectionName
        } = this.props;

        onChangeCollectionName();
    }

    handleFormCancel = (event) => {
        event.preventDefault();

        const {
            onCancelCollectionNameChange,
            onChangeEditingName,
            collectionName
        } = this.props;

        onChangeEditingName(collectionName);
        onCancelCollectionNameChange();
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    componentDidMount() {
        this.collectionNameInput.focus();
    }

    render() {
        const {
            editingName,
            handleInputValueChange
        } = this.props;

        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <Header text="Collection name:" />
                <div className="form-group">
                    <input
                        className="form-control"
                        style={inputStyle}
                        value={editingName}
                        onChange={handleInputValueChange}
                        ref={input => { this.collectionNameInput = input; }}
                    />
                </div>

                <Button
                    label="Change"
                    handleClick={this.handleFormSubmit}
                />

                <Button
                    label="Cancel"
                    handleClick={this.handleFormCancel}
                />
            </form>
        );
    }
}

const mapStateToProps = state => state.collection;
const mapDispatchToProps = dispatch => ({
    onChangeCollectionName: () => {
        dispatch(setCollectionName());
    },

    onChangeEditingName: (name) => {
        dispatch(setEditingName(name));
    },

    handleInputValueChange: (event) => {
        const inputValue = event.target.value;
        dispatch(setEditingName(inputValue));
    },

    onCancelCollectionNameChange: () => {
        dispatch(toggleIsEditingName());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionRenameForm);
