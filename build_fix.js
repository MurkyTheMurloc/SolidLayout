import fs, {promises as fsPromises} from 'fs';
import path from 'path';
import ncp from 'ncp';

const distPath = 'dist';

function customActions(options = {}) {
    const distPath = 'dist';

    async function generateBundle() {
        // Delete the "styles" directory in the dist folder
        const stylesDirPath = path.join(distPath, 'styles');
        if (fs.existsSync(stylesDirPath)) {
            fs.rmdirSync(stylesDirPath, {recursive: true});
            console.log(`Deleted "${stylesDirPath}" directory.`);
        }

        // Rename the "test" directory to "styles" in the dist folder
        const testDirPath = path.join(distPath, 'css'); // Changed 'css' to match your requirement
        if (fs.existsSync(testDirPath)) {
            fs.renameSync(testDirPath, stylesDirPath);
            console.log(`Renamed "${testDirPath}" to "${stylesDirPath}".`);
        }
    }

    generateBundle(); // Call the generateBundle function to execute the actions
}

async function deleteAndCopyStyles() {
    const sourceStylesDirPath = path.join(distPath, 'source/styles');
    const targetStylesDirPath = path.join(distPath, 'styles');

    try {
        // Delete the "styles" directory in dist/source/styles
        await fsPromises.rmdir(sourceStylesDirPath, {recursive: true});
        console.log(`Deleted "${sourceStylesDirPath}" directory.`);

        // Copy the "styles" directory from dist to dist/source
        await new Promise((resolve, reject) => {
            ncp(targetStylesDirPath, sourceStylesDirPath, (err) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(`Copied "${targetStylesDirPath}" to "${sourceStylesDirPath}".`);
                    resolve();
                }
            });
        });
    } catch (error) {
        console.error('Error:', error);
    }
}


// Führe die zuvor definierten Aktionen aus
customActions();

// Rufe die Aktionen zum Löschen und Kopieren der Styles auf
deleteAndCopyStyles();