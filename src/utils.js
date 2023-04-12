import { Table } from "react-bootstrap";

export const renderObject = (object) => {
    return (
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(object).map((key, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{key}</td>
                            <td>{object[key].toString()}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
};