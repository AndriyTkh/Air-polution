import os
import pandas as pd
import json

# Define the folder containing your CSV files
csv_folder = "C:/Users/andri/WebDev/projects/Air-polution/src/csl-database"  # Replace with the path to your CSV files
output_json_file = "combined_data.json"


def combine_csv_to_json(folder_path, output_file):
    # Get a list of all CSV files in the folder
    csv_files = [f for f in os.listdir(folder_path) if f.endswith(".csv")]

    # Initialize an empty dataframe to store combined data
    combined_data = pd.DataFrame()

    # Iterate through each CSV file and read it
    for csv_file in csv_files:
        file_path = os.path.join(folder_path, csv_file)
        try:
            # Load the CSV file into a pandas DataFrame
            data = pd.read_csv(
                file_path, delimiter=";"
            )  # Adjust delimiter if necessary
            # Combine the data with the existing dataframe
            combined_data = pd.concat([combined_data, data], ignore_index=True)
        except Exception as e:
            print(f"Error reading {csv_file}: {e}")

    # Convert the combined DataFrame to a JSON file
    combined_data.to_json(output_file, orient="records", indent=2)
    print(f"Combined CSV data saved to {output_file}")


if __name__ == "__main__":
    combine_csv_to_json(csv_folder, output_json_file)
