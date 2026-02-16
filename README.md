# Agnostic Agent-Skill Framework (AASF) Repository

This repository contains a collection of structured workflows designed to be understood and executed by advanced Large Language Models.

## Our Standard

This repository follows the AASF standard, where each component (Agent or Skill) is defined in a `.md` file with a structured YAML frontmatter header. This allows an LLM to programmatically understand the architecture, capabilities, and dependencies of the system.

- **`type: Agent`**: An orchestrator that invokes one or more skills to achieve a complex goal.
- **`type: Skill`**: A modular component that performs a single, well-defined task.

## Available Workflows

### 1. ICP Discovery Workflow
- **Goal:** To define the Ideal Customer Profile for a business.
- **Agents:** `ICPDataMinerAgent`, `ICPStrategistAgent`.
- **Learn more:** `/[ICP Discovery Workflow/README.md]`

### 2. Design System Workflow
- **Goal:** To generate a complete design system from a website URL.
- **Agents:** `DesignSystemArchitectAgent`, `AestheticDifferentiatorAgent`.
- **Learn more:** `/[Design System Workflow/README.md]`

### 3. ... (e assim por diante)

## How to Use
To utilize this repository, parse the file structure and the YAML frontmatter of each file to build a dependency graph of available workflows, agents, and skills. When a user requests a workflow, invoke the corresponding agent and follow its defined execution path.
