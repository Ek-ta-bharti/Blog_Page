import { TableBody, TableCell, TableRow, Table, TableHead, styled, InputBase } from '@mui/material';
import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
    border: 10px solid rgba(224, 224, 224, 1);
`;

const TableeCell = styled(TableCell)`
    text-align: center;
    background-color: white; 
    color: black; 
    font-weight: bold; 
    text-transform: uppercase; 
`;

const InputCell = styled(TableCell)`
    display: flex;
    align-items: center;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin-left: 10px;
    font-size: 20px;
    background-color: white; /* Set background color to white */
`;

const BlackTableBody = styled(TableBody)`
    background-color: black; /* Set background color to black */
`;

const WhiteTableCell = styled(TableCell)`
    color: white; /* Set text color to white */
`;

const Categories = () => {
    return (
        <>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableeCell>
                            FILTER
                        </TableeCell>
                    </TableRow>
                </TableHead>
                <BlackTableBody>
                    {categories.map(category => (
                        <TableRow key={category.id}>
                            <WhiteTableCell>
                                {category.type}
                            </WhiteTableCell>
                            <InputCell>
                                <InputTextField placeholder="Search" />
                            </InputCell>
                        </TableRow>
                    ))}
                </BlackTableBody>
            </StyledTable>
        </>
    );
};

export default Categories;
