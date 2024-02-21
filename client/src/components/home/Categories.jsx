import { Button, TableBody, TableCell, TableRow, Table, TableHead, styled } from '@mui/material';

import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
    border: 10px solid rgba(224, 224, 224, 1);
`;

const CenteredTableCell = styled(TableCell)`
    text-align: center;
`;

const Categories = () => {
    return (
        <>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <CenteredTableCell>
                            Filiter
                        </CenteredTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map(category => (
                        <TableRow key={category.id}>
                            <TableCell>
                                {category.type}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </>
    );
};

export default Categories;
