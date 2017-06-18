package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"image"
	_ "image/jpeg"
)

type entry struct {
	Original string `json:"src"`
	Width    int    `json:"width"`
	Height   int    `json:"height"`
}

func main() {

	dirpath := "dist/galeria/original"

	photos := make([]entry, 0)

	visit := func(path string, f os.FileInfo, err error) error {
		fmt.Printf("Visited: %s\n", path)

		if !f.IsDir() && !strings.HasSuffix(path, "_tn.jpg") {

			width, height := getResolution(path)
			
			en := entry{
				Original:  strings.Replace(path, "dist", "", 1),
				Width: width,
				Height: height,
			}
			photos = append(photos, en)
		}
		return nil
	}

	err := filepath.Walk(dirpath, visit)
	if err != nil {
		fmt.Printf("error while walking files. Details: %s", err.Error())
		return
	}

	bytes, err := json.MarshalIndent(photos, "", "    ")
	if err != nil {
		fmt.Printf("error while json marshaling. Details: %s", err.Error())
	}

	fmt.Println(string(bytes))
}

func getResolution(path string) (int, int) {
	reader, err := os.Open(path)
	if err == nil {
		defer reader.Close()
		im, _, err := image.DecodeConfig(reader)
		if err != nil {
			fmt.Fprintf(os.Stderr, "%s: %v\n", path, err)
			return 0,0
		}
		fmt.Printf("%s %d %d\n", path, im.Width, im.Height)
		return im.Width, im.Height
	} 

	fmt.Println("Impossible to open the file:", err)
	return 0,0
}
