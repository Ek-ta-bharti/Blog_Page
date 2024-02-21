
import {Button, TableBody, TableCell, TableRow ,Table ,TableHead } from '@mui/material';

import { categories } from '../../constants/data';

const Categories =() => {
    return (
        <>
        <Button>create</Button>
        <Table>
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
        </Table>
        </>
    )
}

export default Categories;