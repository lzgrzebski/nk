import * as React from 'react';
import { PageType, State } from '../../store/reducers';
import { connect } from 'react-redux';
import * as fromApp from '../App/App.actions';
import { editText, saveText } from '../App/App.actions';

interface TextFieldProps {
    page: PageType;
    id: string;
    children: string;

    isEditing: boolean;

    editText: (editedPage: string, editedField: string) => fromApp.EditTextAction;
    saveText: (editedPage: string, editedField: string, changedText: string) => fromApp.SaveTextAction;
}

class TextFieldContainer extends React.Component<TextFieldProps> {

    handleBlur = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        const { page, id } = this.props;
        this.props.saveText(page, id, e.currentTarget.value);
    }

    render() {
        const { isEditing, page, id, children } = this.props;
        return (
            <div>
                {!isEditing ? (
                    <div onClick={() => this.props.editText(page, id)}>                
                        {children}
                    </div>
                ) :
                (
                    <textarea
                        autoFocus
                        defaultValue={children}
                        onBlur={this.handleBlur}
                    />
                ) }
            </div>
        );
    }
}

function mapStateToProps(state: State) {
    return {
        isEditing: state.app.isEditing,
    };
}

export const TextField = connect(mapStateToProps, {  editText, saveText })(TextFieldContainer);