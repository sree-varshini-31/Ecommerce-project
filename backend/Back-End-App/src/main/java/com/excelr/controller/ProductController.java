package com.excelr.controller;

import com.excelr.entity.Product;
import com.excelr.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/category/{category}")
    public List<Product> getByCategory(@PathVariable String category) {
        return productService.getProductsByCategory(category);
    }

    // ✔ Accepts multiple products
    @GetMapping("/bulk")
    public List<Product> addProducts(@RequestBody List<Product> products) {
        return productService.addProducts(products);
    }
    
    @DeleteMapping("/all")
    public void deleteAllProducts() {
        productService.deleteAllProducts();
    }

}
