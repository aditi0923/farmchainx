package com.farmchainx.farmchainx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/crops")
public class CropController {

    @Autowired
    private CropRepository cropRepository;

    @PostMapping
    public Crop addCrop(@RequestBody Crop crop) {
        return cropRepository.save(crop);
    }
    @GetMapping
    public List<Crop> getAllCrops() {
        return cropRepository.findAll();
    }
}