import subprocess
import datetime

def get_git_stats(period):
    """Function to get git statistics for a given time period."""
    try:
        # Calculate date ranges
        if period == 'monthly':
            start_date = (datetime.datetime.now() - datetime.timedelta(days=30)).strftime('%Y-%m-%d')
        elif period == 'quarterly':
            start_date = (datetime.datetime.now() - datetime.timedelta(days=90)).strftime('%Y-%m-%d')
        elif period == 'yearly':
            start_date = (datetime.datetime.now() - datetime.timedelta(days=365)).strftime('%Y-%m-%d')
        else:
            raise ValueError("Invalid period. Use 'monthly', 'quarterly', or 'yearly'.")

        # Get commit stats
        commit_command = ['git', 'rev-list', '--count', '--since={}'.format(start_date), 'HEAD']
        commit_count = subprocess.check_output(commit_command).strip().decode('utf-8')

        # Get lines added/removed
        diff_command = ['git', 'diff', '--shortstat', 'HEAD', 'HEAD~{}'.format(commit_count)]
        diff_output = subprocess.check_output(diff_command).strip().decode('utf-8')

        return commit_count, diff_output

    except subprocess.CalledProcessError as e:
        print(f"Error executing command: {e}")
        return 0, "No data"

def display_stats():
    """Display statistics for monthly, quarterly, and yearly changes."""
    for period in ['monthly', 'quarterly', 'yearly']:
        commit_count, diff_output = get_git_stats(period)
        print(f"\n{period.capitalize()} Stats:")
        print(f"Commits: {commit_count}")
        print(diff_output)

if __name__ == "__main__":
    display_stats()