# task-master-ai




```
# Initialize a new project
task-master init

# Parse a PRD and generate tasks
task-master parse-prd your-prd.txt

# List all tasks
task-master list

# Show the next task to work on
task-master next

# Show specific task(s) - supports comma-separated IDs
task-master show 1,3,5

# Research fresh information with project context
task-master research "What are the latest best practices for JWT authentication?"

# Move tasks between tags (cross-tag movement)
task-master move --from=5 --from-tag=backlog --to-tag=in-progress
task-master move --from=5,6,7 --from-tag=backlog --to-tag=done --with-dependencies
task-master move --from=5 --from-tag=backlog --to-tag=in-progress --ignore-dependencies

# Generate task files
task-master generate

# Add rules after initialization
task-master rules add windsurf,roo,vscode

# Analyze Complexity
tm analyze-complexity
tm list

tm expand --all
tm expand --id=<id>
tm analyze-complexity --research

tm list --with-subtasks 
```