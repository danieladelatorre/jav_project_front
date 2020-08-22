import React, { useState } from 'react';
import { Form, Input } from 'semantic-ui-react';

const PersonForm = () => {
    const [serialnumber, setSerialnumber] = useState('');

    return(
        <Form>
            <Form.Field>
                <Input placeholder="serial number" value={serialnumber} onChange={e => setSerialnumber(e.target.value)} />
            </Form.Field>
        </Form>
    )
}

export default PersonForm;