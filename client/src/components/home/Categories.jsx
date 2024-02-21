
import {Button, TableBody, TableCell, TableRow ,Table ,TableHead, styled } from '@mui/material';

import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
    border:10px solidrgba (224 224, 224, 1);
`;
const StyledButton = styled(Button)`
margin:20px;
width:85%;
background: #6495ED;
color:#fff;
`
const Categories =() => {
    return (
        <>
        <StyledButton>create</StyledButton>
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        alll
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category => (
                        <TableRow key={category.id}>
                        <TableCell>
                            {category.type}
                        </TableCell>
                    </TableRow>
                    ))
                }
            </TableBody>
        </StyledTable>
        </>
    )
}

export default Categories;