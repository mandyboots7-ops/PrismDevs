import { execSync } from 'child_process';

/**
 * Executes a SQL statement via the team-db CLI.
 * @param sql The SQL statement to execute.
 * @returns The parsed JSON output from the command.
 */
export const dbQuery = (sql: string) => {
  try {
    // Escape double quotes for the shell command
    const escapedSql = sql.replace(/"/g, '\\"');
    const result = execSync(`team-db "${escapedSql}"`, { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
};
