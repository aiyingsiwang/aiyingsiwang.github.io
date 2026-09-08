window.SNIPPETS = [

    {
        id: "a",

        title: "powershell脚本：用于读取当前文件夹架构",

        keywords: [
            "powershell",
            "java",
        ],

        code: '$output = "output.txt"
"===== 目录树 =====" | Out-File $output -Encoding UTF8
tree /f | Out-File $output -Encoding UTF8 -Append

"`n===== 文件内容 =====" | Out-File $output -Encoding UTF8 -Append

Get-ChildItem -Recurse -File -Include *.java,*.xml | ForEach-Object {
    "`n" + "="*50 | Out-File $output -Encoding UTF8 -Append
    "文件路径: $($_.FullName)" | Out-File $output -Encoding UTF8 -Append
    "="*50 | Out-File $output -Encoding UTF8 -Append
    Get-Content $_.FullName -Encoding UTF8 -ErrorAction SilentlyContinue | Out-File $output -Encoding UTF8 -Append
}

Write-Host "完成！已生成 $output"'
    }
];
