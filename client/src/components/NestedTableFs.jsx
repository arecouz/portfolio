import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table';

const NestableTableFs = ({ object }) => {
  return (
    <Table>
      <TableBody>
        {object.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <Table>
                <TableBody>
                  {item.parts.map((part, index) => {
                    return (
                      <TableRow key={index}>
                        {/* Wrap the TableCell with an anchor tag that points to the part's link */}
                        <TableCell>
                          <a
                            href={part.link}
                            target="_blank" // Opens the link in a new tab
                            rel="noopener noreferrer" // Security feature for external links
                            className="cursor-pointer text-blue-600 hover:underline"
                          >
                            {part.name}
                          </a>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default NestableTableFs;
